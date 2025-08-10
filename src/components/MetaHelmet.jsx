import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const MetaHelmet = () => {
    const { t } = useTranslation("meta");

    return (
        <Helmet>
            <title>{t("title")}</title>
            <meta name="description" content={t("description")} />
            <meta name="keywords" content={t("keywords")} />
            <meta name="author" content={t("author")} />
        </Helmet>
    );
};

export default MetaHelmet;
