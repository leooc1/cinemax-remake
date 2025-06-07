
export default function Loading() {

    return (
        <div className={`w-full min-h-screen flex justify-center items-center bg-bgd`}>
            <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
        </div>
    )
}
