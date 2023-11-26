"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const GenerateStory_1 = __importDefault(require("../routers/GenerateStory"));
const axios_1 = __importDefault(require("axios"));
jest.mock('axios');
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(GenerateStory_1.default);
const mockedAxios = axios_1.default;
describe('POST /generate-story', () => {
    it('should generate a story based on the provided theme', () => __awaiter(void 0, void 0, void 0, function* () {
        const theme = 'dragão amigável';
        mockedAxios.post.mockResolvedValueOnce({
            data: {
                choices: [{
                        text: "Era uma vez, em um reino muito distante, uma pequena vila cercada por montanhas..."
                    }]
            }
        });
        const res = yield (0, supertest_1.default)(app)
            .post('/generate-story')
            .send({ theme });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('story');
        expect(res.body.story).toContain('montanhas');
    }));
    it('should respond with status 500 when an error occurs', () => __awaiter(void 0, void 0, void 0, function* () {
        const theme = 'dragão amigável';
        mockedAxios.post.mockRejectedValueOnce(new Error('Erro ao processar sua solicitação'));
        const res = yield (0, supertest_1.default)(app)
            .post('/generate-story')
            .send({ theme });
        expect(res.status).toBe(500);
    }));
});
