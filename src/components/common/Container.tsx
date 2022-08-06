const Container = ({ children, className }: { children: JSX.Element, className?: string }) => {
    return (
        <div className={`container px-10 mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default Container;