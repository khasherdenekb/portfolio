"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function AboutMe() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://scontent.fuln10-1.fna.fbcdn.net/v/t39.30808-6/370614125_804827431339492_887609353954716211_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ElYI72P3fC0AX-3ei7A&_nc_ht=scontent.fuln10-1.fna&oh=00_AfA8XvkxNJ14q7Bjcv-puvtc4EqvoLuY39g00yiEGvVJMg&oe=65017F15"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-xs font-semibold leading-none text-default-600 md:text-small">
              Khash-Erdene Bolor-Erdene
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @khasherdeneswe
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          I am writing a code since 2021 also working on some software
          development projects. One of the youngest software developers, day by
          day learning and improving myself. I’m passionate about software
          development and technologies. I’m looking forward to getting to work
          on new exciting and challenging projects.
        </p>
        <span className="pt-2">#Developer Engineer 💻</span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">179K</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">179K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
