import { useMediaQuery } from "../components/useMediaQuery"
export default function Classes(){
    const isMobile = useMediaQuery("(max-width: 768px)")
    return(
        <>
            {isMobile ? (
                <MobileLayout />
            ) : (
                <h1>PC</h1>
            )}
        </>
    )
}


function MobileLayout(){
    return(
        <>
            <aside>
                <button className="nav_button"></button>
            </aside>
            <main></main>
        </>
    )

}