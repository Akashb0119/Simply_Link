import { mainModule } from "process";
import { Children, type ReactNode } from "react";

type CourseGoalProps={
    title :string;
    description : string;
    children:ReactNode

}
export default function Coursegoal ({title,description,children}:CourseGoalProps){
    return (
    <article>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        {children}
            <button>Delete</button>
    </article>
            
    
    )
}