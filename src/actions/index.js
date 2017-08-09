
export const getData = (data) => {
    return {
        type: "GET_DATA",
        data: data
    }
}
export const handleClick = (index,boolean) => {
    return {
        type: "HANDLE_CLICK",
        index:index,
        open: boolean
    }
}
