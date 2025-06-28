#![allow(unused)]
use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use std::ops::Not;

use axum::extract::Path;
use axum::http::StatusCode;
// trait IntoRenponse allows the .into_response() to be called
use axum::response::{IntoResponse, Response};
use axum::Json;
use serde::{Deserialize, Serialize};
use serde_json::Result;
use uuid::Uuid;

use crate::files;

const DATA_FOLDER: &str = "data/teams/";

// the input to our `create_user` handler
#[derive(Debug, Deserialize)]
pub struct CreateTeam {
    name: String,
}

// the input to our `create_user` handler
#[derive(Debug, Deserialize)]
pub struct UpdateTeam {
    name: String,
    current: bool,
}

// the output to our `create_user` handler
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Team {
    id: Uuid,
    name: String,
    current: bool,
}

fn setup_data_folder() -> std::io::Result<()> {
    files::setup_folder(DATA_FOLDER);
    Ok(())
}

fn recurse_data_folder() -> std::io::Result<Vec<std::path::PathBuf>> {
    files::recurse_files(DATA_FOLDER)
}

fn get_filename(id: String) -> String {
    // DATA_FILDER/{id}.json

    let mut filename: String = "".to_string();
    filename.push_str(DATA_FOLDER);
    //
    filename.push_str(id.as_str());
    let file_ext: &str = ".json";
    filename.push_str(file_ext);

    filename
}

fn write_team_to_file(team: Team) -> std::io::Result<()> {
    // Serialize it to a JSON string.
    let j = serde_json::to_string(&team).unwrap();

    let filename = get_filename(team.id.to_string());

    // Write json string to file
    files::write_file(&j, &filename);
    Ok(())
}

pub async fn create_team(
    // this argument tells axum to parse the request body
    // as JSON into a `CreateUser` type
    Json(payload): Json<CreateTeam>,
) -> Response {
    // insert your application logic here
    //
    println!("{:?}", payload);

    // handle this method being called before any other method
    setup_data_folder();

    let team = Team {
        id: Uuid::new_v4(),
        name: payload.name,
        current: true,
    };

    println!("{:?}", team);

    write_team_to_file(team.clone());

    // this will be converted into a JSON response
    // with a status code of `201 Created`
    (StatusCode::CREATED, Json(team)).into_response()
}

fn read_team_from_file<P: AsRef<std::path::Path>>(path: P) -> Result<Team> {
    let data_string = &std::fs::read_to_string(path).unwrap_or_default();
    match serde_json::from_str::<Team>(data_string) {
        Ok(data) => Ok(data),
        Err(_e) => {
            let json_data = serde_json::from_str::<Team>(data_string)?;
            Ok(json_data)
        }
    }
}

fn path_exists(path: &str) -> bool {
    std::path::Path::new(path).exists()
}

pub async fn read_team(Path(id): Path<Uuid>) -> Response {
    // handle this method being called before any other method
    setup_data_folder();

    let id_str: String = id.clone().to_string();

    let filepath = get_filename(id_str);

    if path_exists(&filepath).not() {
        let mut message: String = "team id ".to_string();
        message.push_str(id.to_string().as_str());
        message.push_str(" not found");
        return (StatusCode::NOT_FOUND, message).into_response();
    } else {
        // load JSON file into string
        let data_string = std::fs::read_to_string(filepath).unwrap_or("{}".to_string());

        // attempt to deserialize into Team struct
        let mut message: String = "error deserializing id ".to_string();
        message.push_str(id.to_string().as_str());

        let team: Team = serde_json::from_str(&data_string).expect(&message);

        return (StatusCode::OK, Json(team)).into_response();
    }
}

pub async fn update_team(Path(id): Path<Uuid>, Json(payload): Json<UpdateTeam>) -> Response {
    // handle this method being called before any other method
    setup_data_folder();

    let id_str: String = id.clone().to_string();

    let filepath = get_filename(id_str);

    if path_exists(&filepath).not() {
        let mut message: String = "team id ".to_string();
        message.push_str(id.to_string().as_str());
        message.push_str(" not found");
        return (StatusCode::NOT_FOUND, message).into_response();
    } else {
        let team = Team {
            id: id,
            name: payload.name,
            current: payload.current,
        };

        println!("{:?}", team);

        write_team_to_file(team.clone());

        return (StatusCode::OK, Json(team)).into_response();
    }
}

pub async fn delete_team(Path(id): Path<Uuid>) -> Response {
    // handle this method being called before any other method
    setup_data_folder();

    let id_str: String = id.to_string();

    // get file path of team id
    let filepath = get_filename(id_str);

    if path_exists(&filepath).not() {
        // team id does not exist, return not found
        let mut message: String = "team id ".to_string();
        message.push_str(id.to_string().as_str());
        message.push_str(" not found");
        return (StatusCode::NOT_FOUND, message).into_response();
    } else {
        // team id exists, remove it
        std::fs::remove_file(filepath.as_str());
        return (StatusCode::OK).into_response();
    }
}

pub async fn read_all_teams() -> Response {
    // handle this method being called before any other method
    setup_data_folder();

    // read all files in folder
    let mut unsorted_team_files = recurse_data_folder().unwrap();

    // Return empty team list, early
    if unsorted_team_files.len() == 0 {
        return (StatusCode::OK, Json("[]")).into_response();
    }

    let mut team_list: Vec<Team> = [].to_vec();

    for team_file in unsorted_team_files {
        // load JSON file into string
        if path_exists(&team_file.to_str().unwrap()) {
            let data_string =
                std::fs::read_to_string(team_file.clone()).unwrap_or("{}".to_string());

            // attempt to deserialize into Team struct
            let mut message: String = "error deserializing team_file ".to_string();
            message.push_str(team_file.clone().to_str().unwrap());

            let team: Team = serde_json::from_str(&data_string).expect(&message);

            team_list.push(team);
        }
    }

    // sort by name, alphanumerically
    team_list.sort_by(|a, b| alphanumeric_sort::compare_str(a.name.clone(), b.name.clone()));

    return (StatusCode::OK, Json(team_list)).into_response();
}
