import data from './badwords.json'

export const filter = (text) => {
    const response = data.words.some((word) => {
        var regex = new RegExp(word);
        return text.toLowerCase().match(regex);
    });

    return response
}