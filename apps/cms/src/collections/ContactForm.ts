import { CollectionConfig } from "payload";

export const ContactForm: CollectionConfig={
    slug:"contact-form",
    fields:[
        {name:"Name",type:"text",required:true},
        {name:'Email', type:'email',required:true},
        {name:"message",type:'textarea',required:true}
    ],
    
  access: {
    create: ()=> true,

    update: () => false,
    delete: ()=> false,
  },
}