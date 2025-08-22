import { CollectionConfig } from "payload";

export const ContactInfo: CollectionConfig = {

    slug: "contact-info",
    access:{
        read:()=>true,
    },
    fields: [
        { name: "email", type: "email", required: true },
        {
            name: "links", type: 'array', fields: [{
                name: 'label',
                type: 'text',
                required: true,
            },
            {
                name: 'url',
                type: 'text',
                required: true,
            },
            {
                name: 'icon',
                type: 'upload',      
                relationTo: 'media',
            },]
        },
        { name: "pictures", type: "array", fields: [{ name: "picture", type: "upload", relationTo: "media" }] }
    ]
}