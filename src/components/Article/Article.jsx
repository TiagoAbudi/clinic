const Article = ({ title, text, tags, image, alt }) => {
    return <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center">
        <h3 className="font-raleway text-xl text-primary-200 dark:text-tertiary-200 font-bold">{title}</h3>
        <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
            {
                tags.map(tag => <span key={tag} className="font-raleway bg-primary-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 font-bold text-xs uppercase">{tag}</span>)
            }
        </div>
        <div className="grip gap-1">
            {
                text.map((content, index) => <p key={index} className="font-raleway text-primary-200 dark:text-gray-400">{content}</p>)
            }
        </div>
        {image && <img className="sm:p-4" src={image} />}
        {image && alt && <span className="sr-only">{alt}</span>}
    </div>
}

export default Article