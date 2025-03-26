import {FaRocket} from "react-icons/fa";

const AnyContent: React.FC = () => {
    return (
        <div className="flex-1 flex mt-9 justify-center bg-gradient-to-br h-full">
            <div className="text-center max-w-2xl p-8 space-y-6">
                <div className="animate-float">
                    <FaRocket className="w-24 h-24 text-primary mx-auto opacity-80"/>
                </div>

                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1 leading-[1.2]">
                    Ready to Explore?
                </h1>

                <p className="text-xl text-base-content/80">
                    Select an existing request from the sidebar or create a new one to get started!
                </p>
            </div>
        </div>
    );
}

export default AnyContent;