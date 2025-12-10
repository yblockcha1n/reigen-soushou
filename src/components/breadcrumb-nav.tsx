import React from 'react';
import Link from 'next/link';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from 'lucide-react';

interface BreadcrumbProps {
  items: {
    title: string;
    href: string;
    isCurrent?: boolean;
  }[];
}

export function BreadcrumbNav({ items }: BreadcrumbProps) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <span className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                ホーム
              </span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrent ? (
                <span className="text-muted-foreground">{item.title}</span>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}