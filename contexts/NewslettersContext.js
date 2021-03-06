import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Button from "../src/components/common/Button/Button";
import { getNewsletters } from "../src/helpers/userFetcher";

export const NewslettersContext = createContext();

export const NewslettersProvider = ({ children, newsletterStatus = {} }) => {
  const [newsletters, setNewsletters] = useState([]); // Newsletters
  const [loading, setLoading] = useState(true); // Loading State
  const [error, setError] = useState(""); // Error message
  const [totalCount, setTotalCount] = useState(0);
  const [pagination, setPagination] = useState({
    // Pagination State
    limit: 10,
    page: 0,
  });

  useEffect(() => {
    // Set newsletters on first load
    getNewsletters({ ...pagination, ...newsletterStatus })
      .then((data) => {
        if (data.success) {
          setNewsletters(data.newsletters);
          setTotalCount(data.totalCount);
          setLoading(false);
        } else {
          setError(data.message);
          setLoading(false);
        }
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [pagination]);

  const getNewsletterLink = (newsletterId) => {
    // Get link component for Editing newsletter
    return (
      <Button
        variant="solid"
        size="sm"
        rounded="full"
        fontWeight="light"
        px={7}
        text={
          <Link
            prefetch={false}
            href="/newsletters/[newsletterId]"
            as={`/newsletters/${newsletterId}`}
          >
            Edit
          </Link>
        }
      />
    );
  };
  return (
    <NewslettersContext.Provider
      value={{
        newsletters,
        isLoading: loading,
        error,
        getNewsletterLink,
        pagination,
        setPagination,
        totalCount,
      }}
    >
      {children}
    </NewslettersContext.Provider>
  );
};

NewslettersProvider.propTypes = {
  children: PropTypes.element.isRequired,
  newsletterStatus: PropTypes.instanceOf(Object),
};

NewslettersProvider.defaultProps = {
  newsletterStatus: {},
};
