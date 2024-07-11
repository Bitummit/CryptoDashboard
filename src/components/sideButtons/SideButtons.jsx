import LanguageButton from "./LanguageButton";
import NavButton from "./NavButton";

export default function SideButtons() {
    return (
        <div>
            <div>
            <NavButton />
            </div>
            <div className="fixed bottom-10 left-0 ml-1 hidden md:block border border-colorBorder rounded-lg bg-colorBgSecondary z-40 md:w-20">
                <div className="p-3">
                    <LanguageButton isLong={false}/>
                </div>
            </div>
        </div>
    )
}