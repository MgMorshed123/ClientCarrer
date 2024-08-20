import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../Redux/jobSlice";

const CategorySection = () => {
  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "FullStack Developer",
    "Software Engineer",
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));

    console.log("query", query);

    navigate("/browse");
  };
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-xl mx-auto my-20"
      >
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Button onClick={() => searchJobHandler(cat)}>{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext></CarouselNext>
        <CarouselPrevious></CarouselPrevious>
      </Carousel>
    </div>
  );
};

export default CategorySection;
