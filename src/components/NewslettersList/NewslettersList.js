import { useContext, useEffect, useMemo } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

import Table from "../common/Table/Table";
import Pagination from "../common/Pagination/Pagination";

import { getFormattedDate, showNotification } from "../../utils";
import { NewslettersContext } from "../../../contexts/NewslettersContext";

const NewslettersList = () => {
  const {
    newsletters,
    isLoading,
    error,
    getNewsletterLink,
    pagination,
    setPagination,
    totalCount,
  } = useContext(NewslettersContext);

  useEffect(() => {
    if (error) {
      showNotification(error);
    }
  }, [error]);

  const data = useMemo(() => {
    return newsletters.map((newsletter) => ({
      newsletterName: newsletter.reference,
      newsletterSubject: newsletter.emailSubject,
      createdDate: getFormattedDate(newsletter.createdAt),
      status: newsletter.status.toUpperCase(),
      isEditable:
        newsletter.status === "draft" ? (
          getNewsletterLink(newsletter._id)
        ) : (
          <Text>&mdash;</Text>
        ),
    }));
  }, [newsletters]);

  const columns = useMemo(
    () => [
      {
        Header: "Newsletter",
        accessor: "newsletterName",
      },
      {
        Header: "Subject",
        accessor: "newsletterSubject",
      },
      {
        Header: "Created At",
        accessor: "createdDate",
      },
      {
        Header: "Status",
        accessor: "status",
      },

      {
        Header: "Edit Newsletter",
        accessor: "isEditable",
      },
    ],
    []
  );

  return (
    <Flex flexDir="column" w={["", "100%"]}>
      <Flex
        flexDir="column"
        justifyContent={isLoading ? "center" : "flex-start"}
        alignItems="center"
        h="auto"
        w="100%"
      >
        {isLoading ? (
          <Image src="loader_black.gif" h="5rem" />
        ) : (
          <Table
            columns={columns}
            data={data}
            size={("sm", "sm", "md", "lg")}
          />
        )}

        {totalCount > newsletters.length ? (
          <Pagination
            {...pagination}
            totalCount={totalCount}
            setPagination={setPagination}
          />
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

export default NewslettersList;
