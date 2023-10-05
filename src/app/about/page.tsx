export default function About() {
    return (
        <div>
            <main className="flex flex-col items-center bg-white">
                <div
                    className={"flex max-[769px]:flex-col w-[100%] py-20 max-[769px]:py-6 min-[769px]:px-44 min-[769px]:gap-36"}>
                    <div
                        data-aos="fade-right"
                        className={"flex flex-col w-[50%] max-[769px]:w-auto text-black gap-6 px-10"}
                    >
                        <div className={"font-bold text-4xl"}>
                            {"I'm Edwin, a software developer based in Surabaya."}
                        </div>
                        <div className={"text-2xl"}>
                            {"Hey there, I'm Edwin, a software developer based in Surabaya with a passion for creating user friendly website, mobile application or games. I especially enjoy working with other people, self disciplined and hard working."}
                        </div>
                        <div className={"text-2xl"}>
                            {"When I'm not develop or maintaining software or app, you can find me enjoying feeding my fish, workout, cooking or playing game. Thanks for stopping by my portfolio!"}
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        className={"flex flex-col w-[50%] max-[769px]:w-[100%] text-black gap-6 max-[769px]:px-10 min-[769px]:px-28 py-4 max-[769px]:py-6 select-none"}
                    >
                        <div className={"font-bold text-2xl underline"}>
                            {"What I like"}
                        </div>
                        <div className={"text-2xl"}>
                            {"Playing Game"}
                        </div>
                        <div className={"text-2xl"}>
                            {"Singing"}
                        </div>
                        <div className={"text-2xl"}>
                            {"Workout"}
                        </div>
                        <div className={"text-2xl"}>
                            {"Fish"}
                        </div>
                        <div className={"font-bold text-2xl underline"}>
                            {"What I'm learning"}
                        </div>
                        <div className={"text-2xl"}>
                            {"Video Editing"}
                        </div>
                        <div className={"text-2xl"}>
                            {"Table Tennis"}
                        </div>
                        <div className={"text-2xl"}>
                            {"Cooking"}
                        </div>
                    </div>
                </div>
            </main>
            <hr className={"h-px border-0 dark:bg-gray-300"}/>
        </div>
    )
}
