

import { secrets } from "@/constants/constant";

export default function Data() {


    return (
        <div className="container mx-auto px-5">
            <h4 className="text-lg font-bold mb-4">Your Secrets</h4>

            {/* Titles */}
            <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                <div>Sites/Entity</div>
                <div>Username/Entity-name</div>
                <div>Passwords/Secret</div>
                <div>Action</div>
            </div>

            {/* Dynamic List */}
            {secrets.map((secret, index) => (
                <div
                    key={index}
                    className="grid grid-cols-4 gap-4 py-2 border-b items-center"
                >
                    <div>{secret.site}</div>
                    <div>{secret.username}</div>
                    <div>{secret.password}</div>
                    <div>
                        <button className="text-blue-500 hover:underline">Delete</button>{" "}
                        |{" "}
                        <button className="text-blue-500 hover:underline">Update</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
