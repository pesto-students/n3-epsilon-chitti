import { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import renderHTML from "react-render-html";
import { withIronSession } from "next-iron-session";
import juice from "juice";

import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
  Box,
  Image,
  Tag,
  TagLabel,
  TagCloseButton,
} from "@chakra-ui/react";

import Button from "../../src/components/common/Button/Button";

const RichTextEditor = dynamic(
  () => import("../../src/components/common/RichTextEditor/RichTextEditor"),
  {
    ssr: false,
  }
);

import {
  checkAuthentication,
  getIronConfig,
  showNotification,
} from "../../src/utils";
import ckeditorStyles from "../../src/components/common/ckeditorStyles";
import { createNewsletter } from "../../src/helpers/userFetcher";

const CreateNewNewsletter = () => {
  const [editorData, setEditorData] = useState(
    `<p style="text-align:center;">&nbsp;</p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;"><span class="text-huge" style="font-size: 1.8em; color: hsl(270, 75%, 60%);">Hello World!</span></p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;"><span style="color:hsl(270, 75%, 60%);">Welcome to the First newsletter ever written on <strong>Chitti</strong></span></p><p style="text-align:center;">&nbsp;</p><p style="text-align:center;"><span style="color:hsl(270, 75%, 60%);">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span></p><p style="text-align:center;"><br>&nbsp;</p>`
  );
  const [formData, setFormData] = useState({
    reference: "",
    subject: "",
    keyword: "",
  });
  const [keywordsList, setKeywordsList] = useState([]);
  const [pageStatus, setPageStatus] = useState("loaded");
  // enum for Page status. Values as below
  // loaded, saving

  const router = useRouter();

  const handleInputChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddKeyword = () => {
    setKeywordsList([...keywordsList, formData.keyword]);
    setFormData({
      ...formData,
      keyword: "",
    });
  };

  const handleRemoveKeyword = (kIndex) => {
    const tempKeywords = keywordsList?.filter(
      (keyword, index) => index !== kIndex
    );
    setKeywordsList(tempKeywords);
  };

  const handleTextEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(juice.inlineContent(data, ckeditorStyles));
  };

  const handleDiscardDraft = () => {
    setFormData({
      reference: "",
      subject: "",
      keyword: "",
    });
    setKeywordsList([]);
    setEditorData(
      `<p style="text-align:center;">Start Creating your Newsletter!</p>`
    );
  };

  const handleSaveDraft = () => {
    setPageStatus("saving");

    if (valdateFormData()) {
      const requestBody = {
        reference: formData.reference,
        emailSubject: formData.subject,
        body: editorData,
        keywords: keywordsList,
      };

      createNewsletter(requestBody)
        .then((result) => {
          if (result.success) {
            showNotification("Newsletter Saved Successfully!");
            router.push(`/newsletters/${result.newsletter._id}`);
          } else {
            showNotification(result.message);
            setPageStatus("loaded");
          }
        })
        .catch((e) => {
          showNotification(e.message);
          setPageStatus("loaded");
        });
    } else {
      setPageStatus("loaded");
    }
  };

  const handlePublishSend = () => {
    setPageStatus("publishing");
    const requestBody = {
      newsletter: {
        reference: formData.reference,
        emailSubject: formData.subject,
        body: editorData,
        keywords: keywordsList.map((keyword) => keyword.text),
      },
    };

    console.log("RB:: File: new.js, Line: 98 ==> requestBody", requestBody);
  };

  const valdateFormData = () => {
    if (
      formData &&
      formData.reference &&
      formData.subject &&
      formData.reference.length > 0 &&
      formData.subject.length > 0 &&
      keywordsList &&
      keywordsList.length > 0 &&
      editorData.length > 0
    ) {
      return true;
    } else {
      showNotification("Please Enter all the details");
      return false;
    }
  };

  return (
    <Flex
      flexDirection="column"
      w="100%"
      mt={["8vh", "8vh", "8vh", "10vh", 0]}
      ml="auto"
      mr="auto"
      maxW={["100%", "100%", "100%", "100%", "1440px"]}
    >
      <Flex
        justifyContent="space-between"
        flexDir={["column", "column", "row"]}
        alignItems={"center"}
        width="100%"
        pl={[0, 0, 0, 0, 5]}
        pr={[0, 0, 0, 0, 5]}
        pt={[0, 0, 0, 0, 5]}
      >
        <Flex mb={[5, 5, 5, 0, 0]} mt={[5, 5, 5, 0, 0]} ml={[0, 0, 0, 0]}>
          <Heading fontSize={["3xl", "3xl", "3xl", "4xl", "4xl"]}>
            Create Newsletter
          </Heading>
        </Flex>
        <Flex
          flexDirection={["column-reverse", "column-reverse", "row"]}
          justifyContent={["center", "flex-start", "flex-start", "flex-end"]}
          alignItems="center"
        >
          <Flex mt={[3, 3, 0]}>
            <Button
              rounded={"full"}
              disabled={pageStatus !== "loaded"}
              text="Discard Draft"
              variant="link"
              fontWeight={400}
              color="bright.gray"
              textDecor="underline"
              onClick={handleDiscardDraft}
              fontSize={[12, 14, 16]}
            />
          </Flex>
          <Flex>
            <Button
              rounded={"full"}
              disabled={pageStatus !== "loaded"}
              text={
                pageStatus == "saving" ? (
                  <Image src="/loader_black.gif" h="2rem" />
                ) : (
                  "Save Draft"
                )
              }
              variant="outline"
              fontWeight={400}
              ml={[2, 2, 2, 5]}
              backgroundColor="transparent"
              _hover={{
                bg: "bright.gray",
                color: "bright.bg",
              }}
              color="bright.fg"
              onClick={handleSaveDraft}
              fontSize={[12, 14, 16]}
              p="1rem 2rem"
            />
            <Button
              rounded={"full"}
              disabled={pageStatus !== "loaded"}
              text={
                pageStatus === "publishing" ? (
                  <Image src="/loader_white.gif" h="2rem" />
                ) : (
                  "Publish & Send"
                )
              }
              variant="outline"
              fontWeight={400}
              ml={[2, 2, 2, 5]}
              backgroundColor="bright.fg"
              _hover={{
                bg: "transparent",
                color: "bright.fg",
                borderColor: "bright.fg",
              }}
              color="bright.bg"
              onClick={handlePublishSend}
              fontSize={[12, 14, 16]}
              p="1rem 2rem"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" flexWrap={"wrap"} mt={[5, 5, 7, 10, 10]}>
        <FormControl
          flex={["100%", "100%", "50%"]}
          pl={[0, 0, 0, 0, 5]}
          pt={2}
          pb={[2, 2, 2, 2, 5]}
          pr={[0, 0, 5, 5, 10]}
        >
          <FormLabel>Newsletter Name (Invisible to Audience)</FormLabel>
          <Input
            type="text"
            name="reference"
            focusBorderColor="bright.fg"
            borderColor="bright.light"
            border="1px solid"
            borderRadius={0}
            value={formData.reference}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl
          pl={[0, 0, 5, 5]}
          pt={2}
          pb={[2, 2, 2, 2, 5]}
          pr={[0, 0, 0, 0, 5]}
          flex={["100%", "100%", "50%"]}
        >
          <FormLabel>Emailer Subject Line</FormLabel>
          <Input
            type="text"
            name="subject"
            focusBorderColor="bright.fg"
            borderColor="bright.light"
            border="1px solid"
            borderRadius={0}
            value={formData.subject}
            onChange={handleInputChange}
          />
        </FormControl>
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        w={["100%", "100%", "50%"]}
        pl={[0, 0, 0, 0, 5]}
        pt={2}
        pb={[2, 2, 2, 2, 5]}
        pr={[0, 0, 5, 5, 10]}
      >
        <Text mb={2}>Tags</Text>
        <Flex
          w={["100%", "100%", "100%"]}
          borderColor="bright.light"
          borderWidth="1px"
          flexWrap="wrap"
          p={2}
          alignItems="center"
        >
          {keywordsList.length > 0 &&
            keywordsList.map((keyword, index) => (
              <Tag
                size="sm"
                key={index + 1}
                borderRadius={0}
                variant="solid"
                backgroundColor="bright.fg"
                color="bright.bg"
                textTransform="uppercase"
                mt={1}
                mr={2}
                mb={1}
              >
                <TagLabel>{keyword}</TagLabel>
                <TagCloseButton
                  onClick={() => handleRemoveKeyword(index)}
                  _focus={{ outline: "none", boxShadow: "none" }}
                />
              </Tag>
            ))}
          <Input
            flex="1"
            variant="unstyled"
            placeholder="Press Enter to add Tags"
            type="text"
            name="keyword"
            focusBorderColor="none"
            value={formData.keyword}
            onKeyUp={(event) =>
              event.key === "Enter" ? handleAddKeyword() : null
            }
            onChange={handleInputChange}
          />
        </Flex>
      </Flex>
      <Flex
        flexDirection="row"
        justifyContent="center"
        flexWrap={"wrap"}
        width="100%"
      >
        <Flex
          flexDirection="column"
          w={["100%", "100%", "100%", "50%"]}
          pl={[0, 0, 0, 0, 5]}
          pt={2}
          pb={2}
          pr={[0, 0, 0, 5, 10]}
        >
          <Text fontWeight="bold" fontSize="lg" mb={3}>
            Newsletter Body
          </Text>
          <RichTextEditor
            handleChange={handleTextEditorChange}
            data={editorData}
          />
        </Flex>
        <Flex
          flexDirection="column"
          width={["100%", "100%", "100%", "50%"]}
          pl={[0, 0, 0, 5, 5]}
          pt={2}
          pb={2}
          pr={[0, 0, 0, 0, 5]}
          mt={2}
        >
          <Text fontWeight="bold" fontSize="lg" mb={3}>
            Preview
          </Text>
          <Box
            p={5}
            border="1px"
            borderColor="gray.200"
            bgImage="url(/preview-bg-white.jpg)"
            bgPosition="center"
            bgRepeat="repeat"
            bgSize="cover"
            height="100%"
            minHeight="400px"
          >
            {renderHTML(editorData)}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const getServerSideProps = withIronSession(
  checkAuthentication,
  getIronConfig()
);

export default CreateNewNewsletter;
