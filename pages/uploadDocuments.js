import React from 'react'
import withAuth from '../HOC/withAuth'
function uploadDocuments() {
    return (
        <div className="h-screen">
            <p>Upload documents</p>
        </div>
    )
}

export default withAuth(uploadDocuments)
