export const convertDate = (date: string): string => {
    const convertedDate = date.split('/').reverse().join('/');
    return convertedDate as string
}
