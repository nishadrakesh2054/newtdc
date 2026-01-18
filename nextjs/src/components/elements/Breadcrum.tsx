import React from 'react'
import Link from 'next/link'

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumProps {
  title: string;
  homepage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const Breadcrum = ({ 
  title, 
  homepage = "Homepage",
  breadcrumbs 
}: BreadcrumProps) => {
  // Default breadcrumb: Homepage > Title
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: homepage, href: "/" },
    { label: title }
  ];

  // Use provided breadcrumbs or default
  const breadcrumbItems = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className="page-title">
      <div className="themeflat-container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-title-heading">
              <h1 className="title">{title}</h1>
            </div>
         
            <div className="breadcrumbs">
              <ul>
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <li>
                      {item.href ? (
                        <Link href={item.href}>{item.label}</Link>
                      ) : (
                        <a>{item.label}</a>
                      )}
                    </li>
                    {index < breadcrumbItems.length - 1 && (
                      <li>
                        <i className="icon-Arrow---Right-2" />
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrum
