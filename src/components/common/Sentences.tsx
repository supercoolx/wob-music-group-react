const Sentences = ({ sentences }: { sentences: string[] }) => {
    return (
        <div className="pt-10">
            {
                sentences.map(sentence => <><p className="text-lg">{sentence}</p><br /></>)
            }
        </div>
    )
}

export default Sentences;