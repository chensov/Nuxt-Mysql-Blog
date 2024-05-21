import { H3Event } from 'h3';
import * as blogModel from '../model/blog';

export const read = async () => {
    try {
        const result = await blogModel.read();
        return {
            data: result
        };
    } catch (error) {
        console.error('Error reading blogs:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        });
    }
}

export const create = async (evt: H3Event) => {
    try {
        const body = await readBody(evt);
        const result = await blogModel.create({
            title: body.title,
            content: body.content
        });

        return {
            data: result
        };
    } catch (error) {
        console.error('Error creating blog:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        });
    }
}

export const detail = async (evt: H3Event) => {
    try {
        const result = await blogModel.detail(evt.context.params?.id as string);
        return {
            data: result
        };
    } catch (error) {
        console.error('Error getting blog details:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        });
    }
}

export const update = async (evt: H3Event) => {
    try {
        const body = await readBody(evt);
        const result = await blogModel.update(evt.context.params?.id as string, {
            title: body.title,
            content: body.content
        });

        return {
            data: result
        };
    } catch (error) {
        console.error('Error updating blog:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        });
    }
}

export const remove = async (evt: H3Event) => {
    try {
        const result = await blogModel.remove(evt.context.params?.id as string);
        return {
            data: result
        };
    } catch (error) {
        console.error('Error deleting blog:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        });
    }
}
