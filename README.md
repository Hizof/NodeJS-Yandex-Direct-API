# NodeJS-Yandex-Direct-API

Библиотека для работы с API Яндекс Директ из NodeJS.

#[API версии 4](https://tech.yandex.ru/direct/doc/dg-v4/reference/_AllMethods-docpage/)
##Кампании, объявления, фразы
- [x] **кампании**: CreateOrUpdateCampaign | GetCampaignsList | GetCampaignsListFilter | GetCampaignsParams | DeleteCampaign
- [x] **объявления и фразы**: CreateOrUpdateBanners | GetBanners | GetBannerPhrases | GetBannerPhrasesFilter | DeleteBanners
- [ ] **управление кампаниями**: ResumeCampaign | StopCampaign | ArchiveCampaign | UnArchiveCampaign
- [ ] **управление объявлениями**: ModerateBanners | ResumeBanners | StopBanners | ArchiveBanners | UnArchiveBanners
- [x] **управление ставками**: SetAutoPrice | UpdatePrices

##Статистика и аналитика
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
