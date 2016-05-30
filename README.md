# NodeJS-Yandex-Direct-API

Библиотека для работы с API Яндекс Директ из NodeJS.

#[API версии 4](https://tech.yandex.ru/direct/doc/dg-v4/reference/_AllMethods-docpage/)
## :white_check_mark: Кампании, объявления, фразы
- [x] **кампании**: CreateOrUpdateCampaign | GetCampaignsList | GetCampaignsListFilter | GetCampaignsParams | DeleteCampaign
- [x] **объявления и фразы**: CreateOrUpdateBanners | GetBanners | GetBannerPhrases | GetBannerPhrasesFilter | DeleteBanners
- [x] **управление кампаниями**: ResumeCampaign | StopCampaign | ArchiveCampaign | UnArchiveCampaign
- [x] **управление объявлениями**: ModerateBanners | ResumeBanners | StopBanners | ArchiveBanners | UnArchiveBanners
- [x] **управление ставками**: SetAutoPrice | UpdatePrices

## :white_check_mark: Статистика и аналитика
- [x] **статистика кампании**: GetBalance | GetSummaryStat | CreateNewReport | DeleteReport | GetReportList
- [x] **ключевые слова**: CreateNewWordstatReport | DeleteWordstatReport | GetWordstatReport | GetWordstatReportList
- [x] **подсказки к ключевым словам**: GetKeywordsSuggestion
- [x] **прогноз бюджета**: CreateNewForecast | DeleteForecastReport | GetForecast | GetForecastList

## :x: Финансовые операции
- [ ] CreateInvoice | TransferMoney | GetCreditLimits | PayCampaigns

## :white_check_mark: Клиенты
- [x] **методы для всех**: GetClientsUnits | GetSubClients | GetClientInfo | UpdateClientInfo
- [x] **методы для рекламных агентств**: CreateNewSubclient | GetClientsList

## :white_check_mark: Прочие методы
- [x] **справочники**: GetRegions | GetRubrics | GetTimeZones | GetStatGoals | GetChanges
- [x] **информация об API**: GetAvailableVersions | GetVersion | PingAPI
