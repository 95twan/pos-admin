import axios from "axios";
import {API_HOST} from "./env";
import {deleteImage} from "./imageHandler";

export const deleteMenu = (menuId, imageUrl, callback) => {
    deleteImage(imageUrl, () => {
        axios.delete(`${API_HOST}/menus/${menuId}?force=true`)
            .then(() => {
                callback()
            }).catch((err) => {
            console.log(err)
        })
    })
}
