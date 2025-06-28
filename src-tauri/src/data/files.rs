use std::fs;
use std::path::{Path, PathBuf};

pub fn setup_folder(path_string: &str) -> std::io::Result<()> {
    let _ = fs::create_dir_all(path_string);
    Ok(())
}

pub fn recurse_files(path: impl AsRef<Path>) -> std::io::Result<Vec<PathBuf>> {
    let mut buf = vec![];
    let entries = fs::read_dir(path)?;

    for entry in entries {
        let entry = entry?;
        let meta = entry.metadata()?;

        if meta.is_dir() {
            let mut subdir = recurse_files(entry.path())?;
            buf.append(&mut subdir);
        }

        if meta.is_file() {
            buf.push(entry.path());
        }
    }

    buf.sort();

    Ok(buf)
}

pub fn write_file(json_string: &str, filename: &str) -> std::io::Result<()> {
    // println!("{:?}", filename);
    fs::write(&filename, json_string).expect("unable to write file");
    Ok(())
}
