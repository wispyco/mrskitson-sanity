export default {
    name:'blogPost',
    title:'Blog Post',
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
    ]
}