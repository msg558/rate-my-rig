import  './custom.css'

type ImageProps = {
    path: string
}
export const Image = (props: ImageProps) => {
    return(<img className='Image' src={props.path}></img>)
}