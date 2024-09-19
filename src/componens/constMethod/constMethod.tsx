interface constMethodpro{
    title: string;
    description: string;
}
export const ConstMethod = ({title,description}:constMethodpro)=>{
    return(
        <main>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </main>
    )

}