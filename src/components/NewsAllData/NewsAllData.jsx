import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const NewsAllData = ({ data }) => {
  const { newsCategory, newsDescription, newsPreviewImage, newsTitle, _id } =
    data;
  return (
    <Card>
      <CardHeader floated={false} color="blue-gray" className="relative h-56">
        <img src={newsPreviewImage} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {newsTitle}
        </Typography>
        <Typography>{newsDescription.slice(0, 120)}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small" className="capitalize">
          <span className="font-semibold">Cateogry: </span>
          {newsCategory}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default NewsAllData;
