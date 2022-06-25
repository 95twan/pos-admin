import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "./env";

export const deleteImage = (url, callback) => {
    const menuImageRef = ref(storage, url)

    deleteObject(menuImageRef).then(() => {
        callback()
    }).catch((error) => {
        console.log(error)
    })
}

export const uploadImage = (file, imageName, callback) => {
    if (!file) {
        return alert("이미지를 선택해주세요!");
    }
    const menuImageRef = ref(storage, `menu-image/${imageName}`);
    const uploadTask = uploadBytesResumable(menuImageRef, file);

    uploadTask.on(
        "state_changed",
        () => {
        },
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                callback(url)
            })
        }
    );
}
