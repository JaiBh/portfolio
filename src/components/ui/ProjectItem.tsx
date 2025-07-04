import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./card";

interface ProjectItemProps {
  demoHref: string;
  githubHref: string;
  title: string;
  desc: string;
  tech: string;
  image: string;
}

function ProjectItem({
  title,
  desc,
  tech,
  image,
  demoHref,
  githubHref,
}: ProjectItemProps) {
  return (
    <>
      <Card>
        <CardContent className="space-y-4 h-full grid grid-rows-[auto_1fr]">
          <div className="relative aspect-square bg-primary rounded-xl p-1">
            <div className="relative w-full h-full">
              <Link
                href={"https://www.jaibh-finance.xyz"}
                target="_BLANK"
                className="group"
                rel="noopener noreferrer"
              >
                <Image
                  src={image}
                  alt={`${title} thumbnail`}
                  fill
                  priority
                  className="object-contain  rounded-xl transition group-hover:opacity-90"
                ></Image>
              </Link>
            </div>
          </div>
          <div className="space-y-5  flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-xl font-bold capitalize">{title}</h3>
              <p className="">{desc}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground capitalize">
                Tech: {tech}
              </p>
              <div className="flex gap-3">
                <Link
                  href={demoHref}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
                <Link
                  href={githubHref}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
export default ProjectItem;
