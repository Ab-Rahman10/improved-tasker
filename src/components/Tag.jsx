function Tag({ title }) {
    let colors = ["bg-blue-500", "bg-red-500", "bg-green-500"];
    let randomNumber = Math.floor(Math.random() * 2) + 1;

    return (
        <span
            className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${colors[randomNumber]} px-2.5 text-sm capitalize text-[#F4F5F6]`}
        >
            {title}
        </span>
    );
}

export default Tag;
