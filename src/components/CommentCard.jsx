import React from 'react'

function CommentCard() {
    return (


        <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            < figure className="" >
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                    <p className="my-4">If you care for your time, I hands down would go with this</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                            <div>Bonnie Green</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 ">Developer at Open AI</div>
                        </div>
                </figcaption>
            </figure >
        </div>

    )
}

export default CommentCard
