const Cover = () => {
    return (
        <div className="flex h-screen w-full object-contain inset-0 outline-0">
            <video className="object-cover w-full h-screen absolute -z-50" src="/cover.m4v" autoPlay loop muted />
        </div>
    )
}

export default Cover
