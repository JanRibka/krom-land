import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

interface IProps {
  text: string;
  name: string;
}

const SlideItem = (props: IProps) => {
  return (
    <>
      <Typography className='text-first-line'>"</Typography>
      {!!props.text ? (
        <Typography className='text-second-line'>"{props.text}"</Typography>
      ) : (
        <>
          <Skeleton
            variant='rectangular'
            className='skeleton-text-first-line'
          />
          <Skeleton
            variant='rectangular'
            className='skeleton-text-second-line'
          />
          <Skeleton
            variant='rectangular'
            className='skeleton-text-third-line'
          />
        </>
      )}

      {!!props.name ? (
        <Typography className='text-third-line'>{props.name}</Typography>
      ) : (
        <Skeleton variant='rectangular' className='skeleton-name' />
      )}
    </>
  );
};

export default SlideItem;
