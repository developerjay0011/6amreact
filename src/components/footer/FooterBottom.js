import React from "react";
import { CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
import { Typography, alpha } from "@mui/material";
import { getCurrentModuleType } from "../../helper-functions/getCurrentModuleType";
import { ModuleTypes } from "../../helper-functions/moduleTypes";
import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/system";
import { t } from "i18next";
import { Router, useRouter } from "next/router";
import CustomContainer from "../container";

const FooterBottom = (props) => {
  const router = useRouter();
  const handleClickToRoute = (href) => {
    router.push(href, undefined, { shallow: true });
  };
  const { configData } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "0",
          background: theme.palette.background.default,
        },
      }}
    >
      <CustomStackFullWidth
        py="1rem"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "relative",
          zIndex: "1",
          backgroundColor:
            getCurrentModuleType() === ModuleTypes?.FOOD
              ? alpha(theme.palette.moduleTheme.food, 0.051)
              : alpha(theme.palette.primary.main, 0.051),
        }}
      >
        <CustomContainer>
          <CustomStackFullWidth
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Typography>{configData?.footer_text}</Typography>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
              <Typography
                onClick={() => handleClickToRoute("/terms-and-conditions")}
                sx={{
                  cursor: "pointer",
                  transition: "all ease-out .3s",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    letterSpacing: "0.03em",
                  },
                }}
              >
                {t("Terms & Conditions")}
              </Typography>
              <Typography
                onClick={() => handleClickToRoute("/privacy-policy")}
                sx={{
                  cursor: "pointer",
                  transition: "all ease-out .3s",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    letterSpacing: "0.03em",
                  },
                }}
              >
                {t("Privacy Policy")}
              </Typography>
              {configData?.refund_policy !== 0 && (
                <Typography
                  onClick={() => handleClickToRoute("/refund-policy")}
                  sx={{
                    cursor: "pointer",
                    transition: "all ease-out .3s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      letterSpacing: "0.03em",
                    },
                  }}
                >
                  {t("Refund Policy")}
                </Typography>
              )}
              {configData?.cancelation_policy !== 0 && (
                <Typography
                  onClick={() => handleClickToRoute("/cancellation-policy")}
                  sx={{
                    cursor: "pointer",
                    transition: "all ease-out .3s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      letterSpacing: "0.03em",
                    },
                  }}
                >
                  {t("Cancellation Policy")}
                </Typography>
              )}
              {configData?.shipping_policy !== 0 && (
                <Typography
                  onClick={() => handleClickToRoute("/shipping-policy")}
                  sx={{
                    cursor: "pointer",
                    transition: "all ease-out .3s",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      letterSpacing: "0.03em",
                    },
                  }}
                >
                  {t("Shipping Policy")}
                </Typography>
              )}
            </Stack>
          </CustomStackFullWidth>
        </CustomContainer>
      </CustomStackFullWidth>
    </Box>
  );
};

FooterBottom.propTypes = {};

export default FooterBottom;
