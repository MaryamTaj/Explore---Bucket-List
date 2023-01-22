import React from "react";
import Bucket from "./bucket";

function BucketList(){
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            <Bucket />
        </div>
    );
};

export default BucketList;