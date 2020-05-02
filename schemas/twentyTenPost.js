export default {
    name:'twentyTenPost',
    title:'2010 Archive',
    type: 'document',
    fields: [
        {
            title: 'Post Title',
            name: 'postTitle',
            type: 'string'
        },
        {
            title: 'Post Date',
            name: 'postDate',
            type: 'date'
        },
        {
            title: 'Post Image',
            name: 'postImage',
            type: 'postImage'
        },
        {
            title: 'Post Content',
            name: 'postContent',
            type: 'array',
            of: [{type: 'block'}]
        }
    ],
    preview:{
        select:{
            title:'postTitle',
            subtitle:'postDate',
            description:'postContent'
        }
    },
    orderings:[
        {
            title:'Post Date',
            name:'postDateDesc',
            by:[
                {field: 'postDate', direction: 'desc'}
            ]
        }
    ]
}