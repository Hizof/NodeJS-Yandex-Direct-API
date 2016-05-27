# NodeJS-Yandex-Direct-API

Библиотека для работы с API Яндекс Директ из NodeJS.

#[API версии 4](https://tech.yandex.ru/direct/doc/dg-v4/reference/_AllMethods-docpage/)
## :white_check_mark: Кампании, объявления, фразы
- [x] **кампании**: CreateOrUpdateCampaign | GetCampaignsList | GetCampaignsListFilter | GetCampaignsParams | DeleteCampaign
- [x] **объявления и фразы**: CreateOrUpdateBanners | GetBanners | GetBannerPhrases | GetBannerPhrasesFilter | DeleteBanners
- [x] **управление кампаниями**: ResumeCampaign | StopCampaign | ArchiveCampaign | UnArchiveCampaign
- [x] **управление объявлениями**: ModerateBanners | ResumeBanners | StopBanners | ArchiveBanners | UnArchiveBanners
- [x] **управление ставками**: SetAutoPrice | UpdatePrices

## :soon: Статистика и аналитика
- [ ] **статистика кампании**: GetBalance | GetSummaryStat | CreateNewReport | DeleteReport | GetReportList
- [ ] **ключевые слова**: CreateNewWordstatReport | DeleteWordstatReport | GetWordstatReport | GetWordstatReportList
- [ ] **подсказки к ключевым словам**: GetKeywordsSuggestion
- [ ] **прогноз бюджета**: CreateNewForecast | DeleteForecastReport | GetForecast | GetForecastList

##Финансовые операции
- [ ] CreateInvoice | TransferMoney | GetCreditLimits | PayCampaigns

##Клиенты
- [ ] **методы для всех**: GetClientsUnits | GetSubClients | GetClientInfo | UpdateClientInfo
- [ ] **методы для рекламных агентств**: CreateNewSubclient | GetClientsList

##Прочие методы
- [ ] **справочники**: GetRegions | GetRubrics | GetTimeZones | GetStatGoals | GetChanges
- [ ] **информация об API**: GetAvailableVersions | GetVersion | PingAPI
