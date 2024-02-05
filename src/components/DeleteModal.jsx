import Button from "./Button";

export default function DeleteModal({ onClose, onAgree, title }) {
    return (
        <div>
            <div
                onClick={onClose}
                className="fixed top-0 left-0 z-[99] backdrop-blur-md w-full h-full"
            ></div>
            <div className="mx-auto z-[999] fixed left-1/2 top-3 transform -translate-x-1/2 my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                    {title}
                </h2>

                <div className="mt-16 flex justify-center lg:mt-20">
                    <Button
                        onClick={onAgree}
                        type="button"
                        className="bg-blue-600 mr-1"
                    >
                        Yes
                    </Button>
                    <Button onClick={onClose} className="bg-orange-600 ml-1">
                        No
                    </Button>
                </div>
            </div>
        </div>
    );
}
