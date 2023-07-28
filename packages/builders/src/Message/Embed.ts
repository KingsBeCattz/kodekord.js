import { APIEmbed, APIEmbedField, APIEmbedFooter, APIEmbedImage, APIEmbedThumbnail, APIEmbedVideo, APIEmbedProvider, APIEmbedAuthor } from 'discord-api-types/v10'

export class Embed {
    /**
     * Maximum characteres: 256
     */
    title?: string
    /**
     * Maximum characteres: 4096
     */
    description?: string
    /**
     * URL of the embed
     */
    url?: string
    /**
     * Timestamp of embed content
     */
    timestamp?: string;
    /**
     * Color code of the embed
     */
    color?: number;
    /**
     * Footer information
     *
     * See https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
     */
    footer?: APIEmbedFooter;
    /**
     * Image information
     *
     * See https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
     */
    image?: APIEmbedImage;
    /**
     * Thumbnail information
     *
     * See https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
     */
    thumbnail?: APIEmbedThumbnail;
    /**
     * Video information
     *
     * See https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
     */
    video?: APIEmbedVideo;
    /**
     * Provider information
     *
     * See https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
     */
    provider?: APIEmbedProvider;
    /**
     * Author information
     *
     * See https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
     */
    author?: APIEmbedAuthor;
    /**
     * Fields information
     *
     * Length limit: 25 field objects
     *
     * See https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
     */
    fields?: APIEmbedField[];
    constructor(options: APIEmbed){
        this.title = options.title
        this.description = options.description
        this.color = options.color
        this.url = options.url
        this.timestamp = options.timestamp
        this.footer = options.footer
        this.image = options.image
        this.thumbnail = options.thumbnail
        this.video = options.video
        this.provider = options.provider
        this.author = options.author
        this.fields = options.fields
    }

    toJSON(): APIEmbed {
        return Object.fromEntries(Object.entries(this))
    }
    
    setTitle(title: string) {
        if(!title) throw new SyntaxError('You must give a title')
        if(typeof title !== 'string') throw new TypeError('The title must be a string')
        this.title = title.slice(0,256)
        return this
    }
    
    setDescription(description: string) {
        if(!description) throw new SyntaxError('You must give a description')
        if(typeof description !== 'string') throw new TypeError('The description must be a string')
        this.description = description.slice(0,4096)
        return this
    }
    
    setColor(color: number) {
        if(!color) throw new SyntaxError('You must give a color')
        if(typeof color !== 'number') throw new TypeError('The color must be a number')
        this.color = color
        return this
    }

    setURL(url: string) {
        if(!url) throw new SyntaxError('You must give a url')
        if(typeof url !== 'string') throw new TypeError('The url must be a string')
        if(!/(http|https):\/\//gi.test(url)) throw new SyntaxError('The url must start with http or https')
    }

    setTimestamp(timestamp: string){
        if(!timestamp) throw new SyntaxError('You must give a timestamp')
        if(typeof timestamp !== 'string') throw new TypeError('The timestamp must be a string')
        this.timestamp = timestamp
    }
}