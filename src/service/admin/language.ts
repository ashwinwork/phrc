import LanguageModel from "../../models/admin/language";

export async function addLangugae(langIdentifier,language) {
    LanguageModel.addLanguage(langIdentifier,language);

    return true;
}

export async function getLanguage() {
    const languages = await LanguageModel.getLanguages();

    return languages;
}

export async function deleteLanguages(langIdentifier: string) {
    LanguageModel.deleteLanguage(langIdentifier);

    return true;
}