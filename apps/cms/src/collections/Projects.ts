import { CollectionConfig } from "payload";

export const Projects: CollectionConfig={
    slug:"projects",
    access:{
        read:()=>true
    },
    fields:[
        {name:"project",type:'text',required:true},
        {name:"description", type:"text",required:true},
        {name:'information',type:"text",required:true},
        {name:"Images",type:"array",
            fields:[
                {
                    name:"Image",
                    type:"upload",
                    relationTo:"media"
                }
            ]
        }
    ]
}