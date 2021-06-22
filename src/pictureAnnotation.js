import React from 'react';
import { ReactPictureAnnotation } from 'react-picture-annotation';

const PictureAnnotation = () => {
    const [data, setData] = React.useState([]);

    // POSSIBLE OPTION TO INCLUDE RESIZE

    // const [pageSize, setPageSize] = React.useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    // });
    // const onResize = () => {
    //     setPageSize({ width: window.innerWidth, height: window.innerHeight });
    // };

    // React.useEffect(() => {
    //     window.addEventListener('resize', onResize);
    //     return () => window.removeEventListener('resize', onResize);
    // }, []);

    const onSelect = selectedId => console.log(selectedId);
    const onChange = (data) => {
        data?.map(item => {
            // console.log(item)
            return setData({
                comment: item?.comment,
                mark: item?.mark
            })
        })

        // console.log("This is the Label: ", comment)
        // console.log("This is the Mark: ", mark)

    }
    const { comment, mark } = data
    console.log(mark)
    return (
        <div>
            <div>
                <ReactPictureAnnotation
                    image="https://source.unsplash.com/random/800x600"
                    onSelect={onSelect}
                    onChange={onChange}
                    width={300}
                    height={300}
                // POSSIBLE OPTION TO INCLUDE RESIZE
                // width={pageSize.width}
                // height={pageSize.height}
                />
            </div>
            <p><b>NOTE: Once you are done with the selection and the label click outside of the box to see the changes</b></p><br></br>
            {
                comment && mark ?
                    (
                        <React.Fragment>
                            <p>The Label Is: {comment}</p>
                            <p>The number of pixels in the upper left corner of the image: </p>
                            <p>X: {mark?.x?.toFixed(3)} Y: {mark?.y?.toFixed(3)}</p>
                            <br></br>
                            <p>The size of tag:</p>
                            <p>Height: {mark?.height?.toFixed(3)}</p>
                            <p>width: {mark?.width?.toFixed(3)}</p>
                        </React.Fragment>
                    ) : null
            }
        </div>
    );
}
export default PictureAnnotation