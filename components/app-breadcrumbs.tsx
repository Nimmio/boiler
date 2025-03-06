import React from "react";
import { Separator } from "./ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import IBreadcrumb from "@/types/Breadcrumb";

const AppBreadcrumbs = ({
  breadcrumbs,
}: Readonly<{ breadcrumbs: IBreadcrumb[] }>) => {
  return (
    <>
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => {
            if (index + 1 !== breadcrumbs.length) {
              return (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    {breadcrumb.link ? (
                      <BreadcrumbLink href={breadcrumb.link}>
                        {breadcrumb.title}
                      </BreadcrumbLink>
                    ) : (
                      breadcrumb.title
                    )}
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                </>
              );
            } else {
              return (
                <BreadcrumbItem key={breadcrumb.title}>
                  <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            }
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default AppBreadcrumbs;
