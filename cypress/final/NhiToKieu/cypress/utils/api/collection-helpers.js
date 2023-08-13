import { COLLECTION_ENDPOINTS } from "./api-constants"
import { getHeaders } from "./header-helper"
import { RequestHelpers } from "./request-helpers"

export const CollectionHelpers = {

    createNewCollection(token, title, description = {}, isPrivate = {}) {
        RequestHelpers.sendPostRequest(
            COLLECTION_ENDPOINTS.ENDPOINT_CREATE_NEW_COLLECTION, getHeaders(token),
            { 
                title: title,
                description: description,
                private: isPrivate
            }
        )
    },

    addPhotoToCollection(token, collectionId, photoId) {
        RequestHelpers.sendPostRequest(
            COLLECTION_ENDPOINTS.ENDPOINT_ADD_PHOTO_TO_COLLECTION(collectionId), getHeaders(token),
            { 
                collection_id: collectionId,
                photo_id: photoId 
            }
        )
    }
}