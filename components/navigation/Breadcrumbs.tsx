import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="pt-20 pb-3 bg-slate-50">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
              aria-label="Home"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-slate-400 mx-2" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
